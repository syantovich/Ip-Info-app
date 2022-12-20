import { TbLoaderQuarter } from "react-icons/tb";
import { WrapperLoader, AnimatedLoader } from "./styles";
import { IconBaseProps } from "react-icons";

const Loader = ({ size = 20 }: IconBaseProps) => {
  return (
    <WrapperLoader>
      <AnimatedLoader>
        <TbLoaderQuarter size={size} />
      </AnimatedLoader>
    </WrapperLoader>
  );
};
export default Loader;
