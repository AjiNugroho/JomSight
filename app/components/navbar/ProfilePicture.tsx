import Image from 'next/image'

const ProfilePicture = () => {
    return ( 
    <div className='flex w-full gap-4 items-center'>
        <div className='flex w-10 h-10'>
            <Image
            src="/propic.jpeg"
            width={100}
            height={100}
            alt="Profile Picture"
            objectFit='cover'
            style={{objectFit:"cover",borderRadius:"50px"}}
            />
        </div>
    </div>
    
     );
}
 
export default ProfilePicture;