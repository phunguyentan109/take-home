import React from 'react'
import { Skeleton } from 'antd'
import { StyledCard } from '@/modules/home/style'

function CardSkeleton() {
  return (
    <StyledCard>
      <div className='img-place'></div>
      <Skeleton active style={{ height: 100 }} />
    </StyledCard>
  )
}

export default CardSkeleton
