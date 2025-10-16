import Image from 'next/image';
export default function Logo({ file, ...rest }) {
  return (
    <Image src={file} alt="Web Geelong Logo" width={150} height={50} {...rest} />
  );
}
