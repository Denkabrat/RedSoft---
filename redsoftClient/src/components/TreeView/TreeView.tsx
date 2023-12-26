import TreeNode from '../TreeNode/TreeNode';
import { TreeViewProps } from '../../types/types';

const TreeView = ({ rootChildren }:TreeViewProps) => {

 

  return (
    <div className='tree-view'>
      {rootChildren?.map((node) => (
        <TreeNode key={node.key} node={node} />
      ))}
    </div>
  );
};

export default TreeView;
