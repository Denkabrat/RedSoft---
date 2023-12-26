import React, { useState } from 'react';

const TreeNode = ({ node }:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);



  return (
    <div>
      <div onClick={toggle} className='select-node'>
        {node.name}
      </div>
        {isOpen && Array.isArray(node.children) && (
            <div style={{ marginLeft: '20px' }}>
              {node.children.map((child:any) => (
                <TreeNode key={child.key} node={child} />
              ))}
            </div>
        )}
      </div>
  );
};

export default TreeNode;
