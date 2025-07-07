const AddressSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-24">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        {/* Address Info */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-5xl font-bold text-scanpick-white mb-6">
            Address
          </h2>
          <div className="text-scanpick-white/80 text-lg leading-relaxed">
            <p className="font-semibold text-scanpick-white">
              #310, Valsala Nivas, 6th Cross,
            </p>
            <p>Santhosh Nagar, Pipeline Road, T.Dasarahalli</p>
            <p>Bangalore - 57</p>
          </div>
        </div>
        {/* Google Map */}
        <div className="flex-1 w-full max-w-xl rounded-2xl overflow-hidden border border-scanpick-gray-light shadow-lg">
          <div className="h-64 md:h-80 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7267895967874!2d77.49788!3d13.031056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d0e1b0e0e0e%3A0x0!2sT%20Dasarahalli%2C%20Bangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ScanPick Office Location"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressSection;
