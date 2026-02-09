import { useAdmin } from "../../contexts/AdminContext";

export function Gallery() {
  const { gallery } = useAdmin();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-white py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0F0F12] mb-4 sm:mb-6">
              Gallery
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-[#4A4A4A] max-w-3xl mx-auto px-4">
              Take a look at our modern facilities, classrooms, and learning environment
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 sm:py-12 md:py-16 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {gallery.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {gallery.map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all bg-white"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#0F0F12] mb-1">{image.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold capitalize">
                        {image.category}
                      </span>
                      <span className="text-xs text-gray-500">{image.uploadedAt}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No images in gallery yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0F0F12] mb-4 sm:mb-6">
            Experience Our Facilities in Person
          </h2>
          <p className="text-sm sm:text-base text-[#4A4A4A] mb-6 sm:mb-8 lg:text-lg px-4">
            Visit our Hadapsar center to see our state-of-the-art infrastructure and meet our expert faculty
          </p>
          <a
            href="#contact"
            className="inline-block px-6 sm:px-8 py-3 bg-[#C9A24D] hover:bg-[#b8923d] text-white rounded-lg transition-colors text-sm sm:text-base"
          >
            Get Directions
          </a>
        </div>
      </section>
    </div>
  );
}