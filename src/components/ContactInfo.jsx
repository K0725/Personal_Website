export default function ContactInfo() {
    return (
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">Contact Me</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input type="text" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea rows={4} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg">
            Send
          </button>
        </form>
      </div>
    );
  }
  