import ScrollToTopWrapper from "./scroll-to-top-wrapper";

const CountryDetailsTemplate = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ScrollToTopWrapper>
      <>{children}</>
    </ScrollToTopWrapper>
  );
};

export default CountryDetailsTemplate;
