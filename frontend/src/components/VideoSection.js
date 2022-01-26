const VideoSection = () => {
  return (
    <section className="h-96 overflow-hidden">
      <iframe
        height="1080px"
        title="Tatry video"
        src="https://www.youtube.com/embed/CydzycoJ0GI?autoplay=1&mute=1&loop=1&playlist=CydzycoJ0GI"
        className="w-full -translate-y-1/3"
      ></iframe>
    </section>
  );
};

export default VideoSection;
