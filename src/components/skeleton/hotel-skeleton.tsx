import "./hotel-skeleton.css";

const HotelSkeleton = () => {
  return (
    <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-auto content-to-animate overflow-hidden">
      <div className="skeleton h-full border border-secondary-50 rounded-lg shadow">
        <div className="skeleton-image"></div>
        <div className="skeleton-content">
          <div className="skeleton-title"></div>
          <div className="skeleton-info"></div>
          <div className="skeleton-description"></div>
          <div className="skeleton-rating"></div>
        </div>
      </div>
      <div className="skeleton h-full border border-secondary-50 rounded-lg shadow">
        <div className="skeleton-image"></div>
        <div className="skeleton-content">
          <div className="skeleton-title"></div>
          <div className="skeleton-info"></div>
          <div className="skeleton-description"></div>
          <div className="skeleton-rating"></div>
        </div>
      </div>
      <div className="skeleton h-full border border-secondary-50 rounded-lg shadow">
        <div className="skeleton-image"></div>
        <div className="skeleton-content">
          <div className="skeleton-title"></div>
          <div className="skeleton-info"></div>
          <div className="skeleton-description"></div>
          <div className="skeleton-rating"></div>
        </div>
      </div>
      <div className="skeleton h-full border border-secondary-50 rounded-lg shadow">
        <div className="skeleton-image"></div>
        <div className="skeleton-content">
          <div className="skeleton-title"></div>
          <div className="skeleton-info"></div>
          <div className="skeleton-description"></div>
          <div className="skeleton-rating"></div>
        </div>
      </div>
    </div>
  );
};

export default HotelSkeleton;
