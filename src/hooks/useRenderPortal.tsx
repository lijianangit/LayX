import React, { useRef } from 'react';

/**
 * 获取或创建渲染入口
 * @param domId DOM 对象唯一 Id
 */
export default function useRenderPortal(
  domId: string
): React.MutableRefObject<HTMLElement | null> {
  const renderDOM = useRef(document.getElementById(domId));

  if (!renderDOM.current) {
    const domNode = document.createElement('div');
    domNode.id = domId;
    document.body.appendChild(domNode);

    renderDOM.current = domNode;
  }

  return renderDOM;
}
