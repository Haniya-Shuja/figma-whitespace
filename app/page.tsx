import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>Project</h1>
      <h1>Management</h1>
      <p>this is the figma template</p>
      <Image 
        src="/image/img-1.png" // Replace with the actual path to your image
        alt="Description of your image" 
        width={500} // Adjust width as needed
        height={300} // Adjust height as needed 
      />
    </div>
  );
}
