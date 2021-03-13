import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { LoadingContainer } from './styled'


export default function LoadingInfo() {
  return (
    <LoadingContainer>
      <CircularProgress />
    </LoadingContainer>
  )
}