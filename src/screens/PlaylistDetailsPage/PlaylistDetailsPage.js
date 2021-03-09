import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL, axiosConfig } from '../../constants/RequestConfig'
import MusicsCard from '../../components/MusicsCard/MusicsCard'


function PlaylistDetailsPage() {

    const { id } = useParams()

    const getPlaylistsDetails = useRequestData(`${BASE_URL}/playlist/${id}`, undefined, axiosConfig)

    console.log(getPlaylistsDetails)

    return (
        <div>
{/*             
            {getPlaylistsDetails && getPlaylistsDetails.map((info) => {
                return <MusicsCard info={info}/>
                
            })} */}
      
        </div>
    )
}
export default PlaylistDetailsPage