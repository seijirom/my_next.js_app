import Image from 'next/image'

export default function Picture() {
    return (
	    <>
	    <h1>sample pic</h1>
	    <Image
	src="/sample/browserify.png"
	alt="sample pic"
	width={500}
	height={200}
	    />
	    <p>Welcome</p>
	    </>
    )
}
