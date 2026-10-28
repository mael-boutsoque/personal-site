"use client"

import * as React from "react"
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core"
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
  rectSortingStrategy,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

import { cn } from "@/lib/utils"

type SortableStrategy = "horizontal" | "vertical" | "grid"

type SortableItemState = ReturnType<typeof useSortable>

interface SortableItemContextValue {
  attributes: SortableItemState["attributes"]
  listeners: SortableItemState["listeners"]
  setActivatorNodeRef: SortableItemState["setActivatorNodeRef"]
}

const SortableItemContext = React.createContext<SortableItemContextValue | null>(null)

interface SortableProps<T> {
  value: T[]
  onValueChange: (value: T[]) => void
  getItemValue: (item: T) => string
  strategy?: SortableStrategy
  className?: string
  children: React.ReactNode
}

/**
 * Drag-and-drop list built on dnd-kit. The drag activator lives in
 * <SortableItemHandle>, so the rest of the item stays clickable.
 */
export function Sortable<T>({
  value,
  onValueChange,
  getItemValue,
  strategy = "grid",
  className,
  children,
}: SortableProps<T>) {
  const ids = React.useMemo(() => value.map(getItemValue), [value, getItemValue])

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over || active.id === over.id) return

    const oldIndex = ids.indexOf(String(active.id))
    const newIndex = ids.indexOf(String(over.id))
    if (oldIndex === -1 || newIndex === -1) return

    onValueChange(arrayMove(value, oldIndex, newIndex))
  }

  const sortingStrategy =
    strategy === "horizontal"
      ? horizontalListSortingStrategy
      : strategy === "vertical"
        ? verticalListSortingStrategy
        : rectSortingStrategy

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={ids} strategy={sortingStrategy}>
        <div className={className}>{children}</div>
      </SortableContext>
    </DndContext>
  )
}

interface SortableItemProps {
  value: string
  className?: string
  /**
   * Where the drag gesture starts. "handle" requires a <SortableItemHandle>,
   * "item" makes the whole item draggable without any visible indicator.
   */
  activator?: "handle" | "item"
  children: React.ReactNode
}

export function SortableItem({
  value,
  className,
  activator = "handle",
  children,
}: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: value })

  return (
    <SortableItemContext.Provider value={{ attributes, listeners, setActivatorNodeRef }}>
      <div
        ref={setNodeRef}
        style={{ transform: CSS.Transform.toString(transform), transition }}
        className={cn(
          isDragging && "z-10 opacity-60",
          activator === "item" && "pointer-fine:touch-none",
          className
        )}
        {...(activator === "item" ? { ...attributes, ...listeners } : {})}
      >
        {children}
      </div>
    </SortableItemContext.Provider>
  )
}

export function SortableItemHandle({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) {
  const context = React.use(SortableItemContext)

  return (
    <button
      ref={context?.setActivatorNodeRef}
      type="button"
      {...props}
      {...context?.attributes}
      {...context?.listeners}
      className={cn("cursor-grab touch-none active:cursor-grabbing", className)}
    >
      {children}
    </button>
  )
}
