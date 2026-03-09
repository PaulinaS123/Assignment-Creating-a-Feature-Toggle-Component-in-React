import FeatureToggle from "./FeatureToggle";

function App() {
  return (
    <div>
      <h1>Feature Toggle Demo</h1>

      <h2>Normal Test Cases</h2>

      <FeatureToggle isEnabled={true} featureName="Dark Mode" />
      <FeatureToggle isEnabled={false} featureName="Chat Feature" />
      <FeatureToggle isEnabled={true} featureName="Notifications" />

      <h2>Edge Test Cases</h2>

      <FeatureToggle isEnabled={false} featureName="" />
      <FeatureToggle isEnabled={true} featureName=" " />
      <FeatureToggle isEnabled={false} featureName="123Feature" />
    </div>
  );
}

export default App;
