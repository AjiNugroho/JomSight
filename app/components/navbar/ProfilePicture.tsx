import Image from 'next/image'

const ProfilePicture = () => {
    return ( 
    <div className='flex w-full mt-5 py-4 px-6 gap-4 items-center'>
        <div className='flex w-16 h-16 '>
            <Image
            src="/propic.jpeg"
            width={100}
            height={100}
            alt="Profile Picture"
            objectFit='cover'
            style={{objectFit:"cover",borderRadius:"50px"}}
            />
        </div>

        <div>
            <span className='font-bold'>AMIRUL</span><br/>
            <span className='font-thin text-xs'>Bussiness Analyst</span>
        </div>
    </div>
    
     );
}
 
export default ProfilePicture;