import ContentLoader from "react-content-loader";

const SkeletorDetail = (props: any) => (
  <div className = 'skeletor skeletor-detail'>
    <ContentLoader
      speed={2}
      width={1000}
      height={500}
      viewBox="0 0 1000 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="5" y="16" rx="0" ry="0" width="499" height="502" />
      <rect x="528" y="16" rx="0" ry="0" width="175" height="29" />
      <rect x="528" y="62" rx="0" ry="0" width="161" height="18" />
      <rect x="528" y="196" rx="4" ry="4" width="200" height="32" />
      <rect x="529" y="251" rx="4" ry="4" width="200" height="32" />
      <rect x="527" y="432" rx="0" ry="0" width="299" height="14" />
      <rect x="528" y="479" rx="0" ry="0" width="299" height="14" />
    </ContentLoader>
  </div>
);

export default SkeletorDetail;
