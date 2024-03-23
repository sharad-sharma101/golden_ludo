import React from 'react'

interface HistoryCardProps {
    Header?: React.ReactNode;
    Body: React.ReactNode;
}

const HistoryCard: React.FC<HistoryCardProps> = (props) => {
    const { Header, Body } = props;
    return (
        <div className='w-full rounded bg-white shadow-[0px_0px_8px_0px_rgba(0,0,0,0.06)] border-[0.5px] border-solid border-[rgba(8,8,7,0.20)]' >
            <div className='flex items-start gap-2 p-3 border-b-[0.5px] border-solid border-[rgba(8,8,7,0.20)]'>
                {Header}
            </div>
            <div className='flex items-center justify-between gap-2 p-3' >
                {Body}
            </div>
        </div>
    )
}

HistoryCard.defaultProps = {
    Header: <></>,
  };

export default HistoryCard;
