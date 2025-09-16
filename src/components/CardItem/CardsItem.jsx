export default function CardItem({ strong, highlight, image, size, padding }) {
  return (
    <div className={`${padding} bg-[#F0F0F0] flex flex-col items-center leading-6 justify-center shadow-sm text-center w-full h-44 text-lg md:text-sm lg:text-lg xl:text-lg 2xl:text-lg`}>
      <div className="h-[25%] w-full flex items-center justify-center">
      {image && <img src={image} alt={strong} className={`mx-auto my-1 ${size}`} />}
      </div>
      <div className="text-[#014B96] font-medium w-auto h-[60%] flex flex-col items-center justify-center">
        <span><strong>{strong}</strong> {highlight}</span>
      </div>
    </div>
  );
}
