import React from 'react'
import CommetnList from './CommetnList';

const CommentsContainer = () => {


    const commentsData = [
  {
    name: "Rushikesh Bankhele",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Rushikesh Bankhele",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Rushikesh Bankhele",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Rushikesh Bankhele",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Rushikesh Bankhele",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Rushikesh Bankhele",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Rushikesh Bankhele",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Rushikesh Bankhele",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Rushikesh Bankhele",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Rushikesh Bankhele",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Rushikesh Bankhele",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Rushikesh Bankhele",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Rushikesh Bankhele",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

  return (
    <div className='m-5 p-2'>
        <h1 className='font-bold text-xl'>Comments : </h1>
        <CommetnList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer