import { InfiniteSlider } from '@/components/infiniteslider';
export function Slider() {
  return (
    <InfiniteSlider gap={80} speedOnHover={20} className='mb-30'>
      <img
        src='/Mazda.png'
        alt='Mazda'
      />
      <img
        src='/Honda.png'
        alt='Honda'
      />
      <img
        src='/Mercedes.png'
        alt='Mercedes'
      />
      <img
        src='/Bmw.png'
        alt='BMW'
      />
      <img
        src='/Peugeot.png'
        alt='Peugeot'
      />
      <img
        src='/Bentley.png'
        alt='Bentley'
      />
      <img
        src='/Lexus.png'
        alt='Lexus'
      />
    </InfiniteSlider>
  );
}
