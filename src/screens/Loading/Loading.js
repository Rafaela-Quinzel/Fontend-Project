import React from 'react'

/*Material UI */
import { CircularProgress } from '@material-ui/core'

/*Tags Styled*/
import { LoadingContainer } from './styled'

export default function Loading() {
  return (
    <LoadingContainer>
      <CircularProgress />
    </LoadingContainer>
  )
}