import Image from 'next/image'

const ProfilePicture = () => {
    return ( 
    <div className='flex w-full mt-5 gap-4 items-center sm:justify-center sm:pl-3 sm:pb-2 lg:justify-start lg:ml-6'>
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

        <div className='flex flex-col'>
            <span className='font-bold hidden lg:block'>AMIRUL</span>
            <span className='font-thin text-xs hidden lg:block'>Bussiness Analyst</span>
        </div>
    </div>
    
     );
}
 
export default ProfilePicture;