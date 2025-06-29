export const Newsletter = () => {
  return (
    <div className="bg-[#161B22] border-y border-brand-border py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-black mb-4">NEWSLETTER</h2>
          <p className="text-brand-gray mb-2">
            Are you passionate about programming and always looking for ways to learn more and stay up-to-date with the latest developments in the field? If so, our programming blog newsletter is the perfect fit for you!
          </p>
          <p className="text-brand-gray">
            With our newsletter, you'll receive regular updates on the hottest topics in the world of programming, as well as exclusive access to content that you won't find anywhere else.
          </p>
        </div>
        <div className="space-y-4">
            <p className="text-brand-gray">Plus, our team of expert writers and industry professionals provide in-depth analysis and commentary that you're sure you're only getting the most reliable and relevant information.</p>
            <p className="text-brand-gray">Don't miss out - sign up for our newsletter today and take your programming knowledge to the next level!</p>
            <form className="flex space-x-2 mt-4">
                <input type="email" placeholder="Register newsletter" className="flex-grow bg-[#010409] border border-brand-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue" />
                <button type="submit" className="bg-brand-blue text-white font-semibold px-6 py-2 rounded-md hover:opacity-90 transition-opacity">Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
};