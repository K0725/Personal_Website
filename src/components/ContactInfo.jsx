import emailjs from '@emailjs/browser';


const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    e.target,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      (result) => {
        alert('Message sent!');
      },
      (error) => {
        alert('Failed to send. Try again.');
        console.error(error);
      }
    );

  e.target.reset(); 
};

export default function ContactInfo() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center mb-10">Contact Me</h2>
      <form className="space-y-6" onSubmit={sendEmail}>
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name" 
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email" 
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="message" 
            rows={4}
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
}
