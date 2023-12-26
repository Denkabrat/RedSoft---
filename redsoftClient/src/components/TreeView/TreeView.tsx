import TreeNode from '../TreeNode/TreeNode';

const TreeView = ({ rootChildren }:any) => {

 

  return (
    <div>
      {rootChildren.map((node:any) => (
        <TreeNode key={node.key} node={node} />
      ))}
    </div>
  );
};

export default TreeView;
