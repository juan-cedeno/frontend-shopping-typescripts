import ContentLoader from "react-content-loader";

const SkeletorProduct = (props: any) => (
  <div className = 'skeletor'>
    <ContentLoader
      speed={2}
      width={1400}
      height={500}
      viewBox="0 0 1600 500"
      backgroundColor="#CDCDCD"
      foregroundColor="#EAEAEA"
      {...props}
    >
      <rect x="8" y="15" rx="10" ry="10" width="241" height="418" />
      <rect x="265" y="12" rx="10" ry="10" width="241" height="418" />
      <rect x="528" y="12" rx="10" ry="10" width="241" height="418" />
      <rect x="790" y="12" rx="10" ry="10" width="241" height="418" />
      <rect x="1052" y="12" rx="10" ry="10" width="241" height="418" />
      <rect x="1315" y="12" rx="10" ry="10" width="241" height="418" />
    </ContentLoader>
  </div>
);

export default SkeletorProduct;
