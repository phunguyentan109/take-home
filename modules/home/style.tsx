import { styled } from '@compiled/react'
import { Card } from 'antd'

export const HomeStyle = styled.main`
  display: flex;
  padding: 5vh 9vw 0 9vw;
  min-height: 100vh;
  background: rgb(240, 242, 245);

  .content {
    width: 100%;
  }
`

export const StyledCard = styled(Card)`
  width: 100%;

  .ant-card-body {
    padding: 12px 12px 20px;
  }

  .img-place {
    background: #ececec;
    width: 100%;
    height: 180px;
    border-radius: 5px;
    margin-bottom: 20px;
  }
`

export const StyledSessionCard = styled(Card)`
  width: 100%;

  .ant-card-body {
    padding: 12px 12px 20px;
  }

  img {
    width: 100% !important;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  p {
    color: gray;
  }
`
