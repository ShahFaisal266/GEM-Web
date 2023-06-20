import React from 'react'
import Actor from './Actors/Actor'
import FeactureTalent from './Feature-Talent/FeactureTalent'
import Latest from './Latest-&-topSeaech/Latest'
 
import Search from './Searach-FindTalent/Search'

function FindTalentUserData() {
  return (
    <>
     
     <Search/>
     <Latest/>
     <FeactureTalent/>
     <Latest/>
     <Actor/>
     </>
  )
}

export default FindTalentUserData