import React from 'react'

const Video = () => {
  return (
    <div className='flex justify-center items-center'>
      <video className='border-[20px] rounded-2xl border-[#903fff]' width="70%" height="30%" controls>
        <source src="https://s3-figma-videos-production-sig.figma.com/video/1162680317508474349/TEAM/cf45/e9c5/-0e3a-46b5-abd5-871b0dfee46b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ESC69Ujs4Dn-8LqiVKAT-rQu2D6vljutxWpgIMN8Z6prCi5kPgeQDWO~o9Np7vLFBTy3B8Nd1zNFRFWRoCn1-vqPzfsWXJRGyb7odwIbjEa1EOoJTKi56eB4DFaDh83tKm7MHkMRf68Ck0fMV1b0Z~TRMnycyvF2eiy1ZGXQEFaYBaD-WVWyFsQQxVQOeOZrjisUF8zRZwIz59pK32rXm2RzY4SeGznJXqIBwfZpYQKRU0yOnEe6pVh35AZcafcw8SGS68pfvr1bOA91R1TfC2PrIFnGJSynxR3GEWrPGU109nMvvDG8SeatXsGQmx22JAvrVuH3G0PG~J1-GXKpVw__" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Video
