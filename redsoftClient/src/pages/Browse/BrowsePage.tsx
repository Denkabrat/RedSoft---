import { useState, useEffect ,ChangeEvent} from 'react';
import TreeView from '../../components/TreeView/TreeView';
import { ITreeNode } from '../../types/types';
import './BrowsePage.scss';

const BrowsePage = () => {
  const data:ITreeNode[] = [
    {
      key: '_',
      name: 'root',
      children: [
        {
          key: '0',
          name: 'abramovskaya zadacha enim',
          children: [
            {
              key: '0-1',
              name: 'hello qui excepturi placeat culpa',
              children: [
                {
                  key: '0-1-0',
                  name: 'omnis laborum odio',
                },
                {
                  key: '0-1-1',
                  name: 'non esse culpa molestiae omnis sed optio',
                },
                {
                  key: '0-1-2',
                  name: 'molestiae voluptate non',
                },
                {
                  key: '0-1-3',
                  name: 'eaque aut omnis a',
                },
                {
                  key: '0-1-4',
                  name: 'tenetur explicabo ea',
                },
                {
                  key: '0-1-5',
                  name: 'temporibus molestiae aut',
                }
              ],
            },
            {
              key: '0-2',
              name: 'natus impedit quibusdam illo est',
              children: [],
            },
          ],
        },
        {
          key: '1',
          name: 'ladno autem aliquid et et quia',
          children: [],
        },
        {
          key: '2',
          name: 'qui fuga est a eum',
          children: [
            {
              key: '2-0',
              name: 'saepe unde necessitatibus rem',
              children: [
                {
                  key: '2-0-0',
                  name: 'est placeat dicta ut nisi rerum iste',
                  children: [
                    {
                      key: '2-0-0-0',
                      name: 'ea voluptates maiores eos accusantium officiis tempore mollitia consequatur',
                    },
                    {
                      key: '2-0-0-1',
                      name: 'tenetur explicabo ea',
                    }
                  ],
                },
              ],
            },
            {
              key: '2-1',
              name: 'distinctio laborum qui',
            },
            {
              key: '2-2',
              name: 'quam nostrum impedit mollitia quod et dolor',
            },
            {
              key: '2-3',
              name: 'consequatur autem doloribus natus consectetur',
            },
          ],
        },
        {
          key: '3',
          name: 'ab rerum non rerum consequatur ut ea unde',
          children: [],
        },
        {
          key: '4',
          name: 'ducimus molestias eos animi atque nihil',
          children: [],
        },
        {
          key: '5',
          name: 'ut pariatur rerum ipsum natus repellendus praesentium',
          children: [],
        }
      ],
    },
  ];

 

  const [fakeData, setFakeData] = useState<ITreeNode[]>([]);
  const [search, setSearch] = useState<string>('');

  const rootChildren = fakeData[0]?.children ?? [];

  const handleSearchChange = (e:ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFakeData(data);
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

 

  const searchTreeByName = (node: ITreeNode | { children?: ITreeNode[] }, searchString: string): ITreeNode[] | null => {
    if (!node) return null;
  
    if (node.children) {
      let matches: ITreeNode[] = [];

      node.children.forEach((child) => {

        if (child.name.toLowerCase().includes(searchString.toLowerCase())) {
          matches.push({ ...child });
        }

        const childMatches = searchTreeByName(child, searchString);

        if (childMatches) {
          matches = matches.concat(childMatches);
        }
      });

      return matches.length > 0 ? matches : null;
    }
  
    return null;
  };
  
useEffect(() => {
  if (search) {
    const results = searchTreeByName({ children: data[0].children }, search);
    
    setFakeData(results ? [{ key: '_temp', name: 'Search Results', children: results }] : []);
  } else {
    setFakeData(data);
  }
  // eslint-disable-next-line
}, [search]);
  



  return (
    <div className="browse-page">
      <input type="text" placeholder='Поиск' value={search} onChange={handleSearchChange} />
      <TreeView rootChildren={rootChildren} />
    </div>
  );
};

export default BrowsePage;
