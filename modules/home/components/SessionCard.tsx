import React from 'react'
import { StyledSessionCard } from '@/modules/home/style'
import { SessionApiType } from '@/common/global'
import Image from 'next/image'
import dayjs from 'dayjs'

function SessionCard(props: SessionApiType) {
  return (
    <StyledSessionCard>
      <Image src={props.thumbnail_img_url} width={200} height={180} alt='' />
      <h3>{props.display_title}</h3>
      <p>
        {dayjs(props.start_date).format('DD MMM')} -{' '}
        {dayjs(props.end_date).format('DD MMM')}
      </p>
    </StyledSessionCard>
  )
}

export default SessionCard
