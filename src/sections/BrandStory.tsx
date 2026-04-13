export function BrandStory() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="/images/product-1.png"
              alt="NEWFRESHREBBULUM Brand"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-gray-500 text-sm tracking-widest uppercase mb-4">
              Our Story
            </p>
            <h2 className="text-4xl lg:text-5xl font-light mb-8 leading-tight">
              Built in Atlanta.<br />
              Worn Worldwide.
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                For 13 years, NEWFRESHREBBULUM has been at the intersection of music and streetwear culture. 
                What started as a passion project in Atlanta has grown into a movement that 
                represents authentic style and creative expression.
              </p>
              <p>
                Every piece we create tells a story. From our signature UFO graphics to our 
                carefully crafted denim, we design for those who aren't afraid to stand out 
                and make their mark.
              </p>
              <p>
                Limited drops. Premium quality. No compromises.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-light mb-1">13</p>
                <p className="text-gray-500 text-sm">Years</p>
              </div>
              <div>
                <p className="text-3xl font-light mb-1">ATL</p>
                <p className="text-gray-500 text-sm">Home</p>
              </div>
              <div>
                <p className="text-3xl font-light mb-1">∞</p>
                <p className="text-gray-500 text-sm">Style</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
