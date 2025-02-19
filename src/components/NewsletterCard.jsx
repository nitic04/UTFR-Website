const NewsletterCard = ({title, summary, date, link, image_link}) => {
    return (
        <div className="newsletterCard text-white">
            <a href={link} target="_blank" rel="noreferrer">
                <div className='h-[250px] bg-[#f1f1f1] rounded-t-lg' style={{
                    backgroundImage: `url(${image_link})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                    }}>
                </div>
                <div className='p-5'>
                    <h1 className='font-bold text-[28px]/9'>{title}</h1>
                    <div className="flex justify-between">
                        {/* <p className='text-sm text-gray-400 pt-2'>Read time: {readtime} mins</p> */}
                        <p className='text-sm text-gray-400 pt-2'>{date}</p>
                    </div>
                    <p className='text-base pt-3'>{summary}</p>
                </div>
            </a>
        </div>
    )
}

export default NewsletterCard