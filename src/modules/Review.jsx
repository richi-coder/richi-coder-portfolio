import { Suspense } from 'react'

function Review({ tweetCard }) {
  return (
    <Suspense fallback={null}>
            <a href={tweetCard.tweetLink} target='_blank' className="rounded-lg text-white text-sm bg-slate-800 w-80 h-36 py-5 px-5 flex flex-col items-start gap-y-4">
                <div id='top-card' className='w-full flex flex-row items-center justify-between'>
                    <img
                        loading='lazy'
                        src={tweetCard.imageLink}
                        alt={`${tweetCard.name}-twiter`}
                        className='rounded-full text-xs h-full' />
                    <div className="flex flex-col items-start flex-grow px-2">
                        <div id='name' className='font-bold'>{tweetCard.name}</div>
                        <div id='account' className='text-gray-500'>@{tweetCard.account}</div>
                    </div>
                    <i className="devicon-twitter-original"></i>
                </div>
                <div id='tweet-content' className='w-100 text-sm'>
                    {tweetCard.tweet}
                </div>
            </a>
    </Suspense>
  )
}

export default Review;