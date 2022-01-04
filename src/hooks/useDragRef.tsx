import React, { useCallback, useEffect } from 'react';
import { useRef } from 'react';

/**
 * 指针拖动事件对象
 */
export interface DragPointerEvent {
  /**
   * 本地事件
   */
  nativeEvent: PointerEvent;
  /**
   * X 轴移动距离
   */
  distanceX: number;
  /**
   * Y 轴移动距离
   */
  distanceY: number;
}

/**
 * 拖动处理程序类型
 */
export type DragHandler = (ev: DragPointerEvent) => any;

/**
 * 拖动事件映射类型
 */
export interface DragEventMap {
  /**
   * 拖动开始
   */
  start: DragHandler;
  /**
   * 拖动中
   */
  move: DragHandler;
  /**
   * 拖动结束
   */
  end: DragHandler;
}

/**
 * 拖动对象
 */
export class Draggable {
  private _dragStart?: DragHandler;
  get dragStart() {
    return this._dragStart;
  }

  private _dragMove?: DragHandler;
  get dragMove() {
    return this._dragMove;
  }

  private _dragEnd?: DragHandler;
  get dragEnd() {
    return this._dragEnd;
  }

  on<K extends keyof DragEventMap>(type: K, listener: DragEventMap[K]) {
    switch (type) {
      case 'start':
        this._dragStart = listener as DragHandler;
        break;
      case 'move':
        this._dragMove = listener as DragHandler;
        break;
      case 'end':
        this._dragEnd = listener as DragHandler;
        break;
    }
  }
}

/**
 * 创建可拖动的 DOM 引用
 * @param initialValue 初始值
 * @returns DOM 引用对象
 */
export default function useDragRef<T extends HTMLElement>(
  initialValue: T | null
): [React.MutableRefObject<T | null>, Draggable] {
  const eleRef = useRef<T>(initialValue);
  const draggable = new Draggable();
  let startPoint = { x: 0, y: 0 };

  /**
   * 副作用
   */
  useEffect(() => {
    eleRef.current?.addEventListener('pointerdown', pointerdownHandle);

    return () => {
      eleRef.current?.removeEventListener('pointerdown', pointerdownHandle);
    };
  }, []);

  /**
   * 指针按下事件
   */
  const pointerdownHandle = useCallback((ev: PointerEvent) => {
    if (typeof draggable.dragStart === 'function') {
      startPoint = {
        x: ev.pageX,
        y: ev.pageY,
      };

      draggable.dragStart({
        nativeEvent: ev,
        distanceX: 0,
        distanceY: 0,
      });
    }

    document.addEventListener('pointermove', pointermoveHandle);
    document.addEventListener('pointerup', pointerupHandle);
  }, []);

  /**
   * 指针移动事件
   */
  const pointermoveHandle = useCallback((ev: PointerEvent) => {
    ev.preventDefault();

    if (typeof draggable.dragMove === 'function') {
      draggable.dragMove({
        nativeEvent: ev,
        distanceX: ev.pageX - startPoint.x,
        distanceY: ev.pageY - startPoint.y,
      });
    }
  }, []);

  /**
   * 指针抬起事件
   */
  const pointerupHandle = useCallback((ev: PointerEvent) => {
    document.removeEventListener('pointermove', pointermoveHandle);
    document.removeEventListener('pointerup', pointerupHandle);

    if (typeof draggable.dragEnd === 'function') {
      draggable.dragEnd({
        nativeEvent: ev,
        distanceX: ev.pageX - startPoint.x,
        distanceY: ev.pageY - startPoint.y,
      });
    }
  }, []);

  return [eleRef, draggable];
}
