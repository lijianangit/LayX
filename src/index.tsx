import React, { useRef } from 'react';
import useDragRef from './hooks/useDragRef';

export const Thing = () => {
  const [domRef, draggable] = useDragRef<HTMLDivElement>(null);

  draggable.on('start', (ev) => {
    console.log('开始位置-', ev.nativeEvent.pageX, ev.nativeEvent.pageY);
  });

  draggable.on('move', (ev) => {
    console.log(
      '移动位置-',
      ev.nativeEvent.pageX,
      ev.nativeEvent.pageY,
      ev.distanceX,
      ev.distanceY
    );
  });

  draggable.on('end', (ev) => {
    console.log(
      '移动结束-',
      ev.nativeEvent.pageX,
      ev.nativeEvent.pageY,
      ev.distanceX,
      ev.distanceY
    );
  });

  return (
    <div>
      Welcome to your first test package.
      <div
        ref={domRef}
        style={{
          height: 50,
          backgroundColor: '#ccc',
        }}
      >
        测试拖动
      </div>
    </div>
  );
};
