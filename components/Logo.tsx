import Image, { ImageProps } from 'next/image';

interface LogoProps extends Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> {
  file: string;
}

export default function Logo({ file, ...rest }: LogoProps) {
  return (
    <Image src={file} alt="Web Geelong Logo" width={150} height={50} {...rest} />
  );
}
