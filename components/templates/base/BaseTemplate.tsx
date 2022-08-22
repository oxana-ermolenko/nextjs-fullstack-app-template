

export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">{sampleTextProp}</div>;
};
export default BaseTemplate;