import React from 'react'
import { StyledProgramCard } from '@/modules/home/style'
import { ProgramApiType } from '@/common/global'
import Image from 'next/image'
import dayjs from 'dayjs'

function ProgramCard(props: ProgramApiType) {
  return (
    <StyledProgramCard>
      <Image src={props.thumbnail_img_url} width={200} height={180} alt='' />
      <h3>{props.display_title}</h3>
      <p>
        {dayjs(props.start_date).format('DD MMM')} -{' '}
        {dayjs(props.end_date).format('DD MMM')}
      </p>
    </StyledProgramCard>
  )
}

export default ProgramCard
