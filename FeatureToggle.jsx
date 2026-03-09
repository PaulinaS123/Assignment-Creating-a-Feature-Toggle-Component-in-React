function FeatureToggle(props) {
  const { isEnabled, featureName } = props;

  if (isEnabled) {
    return <p>{featureName} is enabled</p>;
  } else {
    return <p>Feature {featureName} is disabled</p>;
  }
}

export default FeatureToggle;
