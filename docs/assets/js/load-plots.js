// assets/js/plots-loader.js

// 1) The dataset directories (each ends with "_final" in your file structure)
const datasets = [
  "coupled_oscillators",
  "lotka_volterra",
  "osu2008",
  "simple_ode",
  "simple_reaction",
];

// 2) The architectures
const architectures = [
  "FullyConnected",
  "MultiONet",
  "LatentNeuralODE",
  "LatentPoly",
];

// 3) Filenames for comparative plots (always in the root folder, e.g. "osu2008_final")
const comparativePlots = [
  "accuracy_error_distributions.png",
  "accuracy_rel_errors_time_models.png",
  "batch_size_errors.png",
  "extrapolation_errors.png",
  "generalization_error_comparison.png",
  "gradients_error_corr_comparison.png",
  "losses_main_model.png",
  "losses_main_model_duration.png",
  "losses_main_model_equal.png",
  "sparse_errors.png",
  "timing_inference.png",
  "uncertainty_confidence.png",
  "uncertainty_distribution.png",
  "uncertainty_distribution_rel.png",
  "uncertainty_error_corr_comparison.png",
  "uncertainty_over_time.png",
];

// 4) Filenames for individual architecture plots
//    (same for FullyConnected, MultiONet, etc. but in subfolders)
const individualPlots = [
  "accuracy_error_per_quantity.png",
  "accuracy_rel_errors_time.png",
  "batchsize_errors_over_time.png",
  "extrapolation_errors_over_time.png",
  "extrapolation_example_predictions.png",
  "gradient_error_heatmap.png",
  "interpolation_errors_over_time.png",
  "interpolation_example_predictions.png",
  "losses_batchsize.png",
  "losses_extrapolation.png",
  "losses_interpolation.png",
  "losses_main.png",
  "losses_sparse.png",
  "losses_uq.png",
  "sparse_errors_over_time.png",
  "uncertainty_deepensemble_preds.png",
  "uncertainty_errors_correlation.png",
  "uncertainty_over_time.png",
];

function loadImages(containerId, folderPath, filenames) {
  const container = document.getElementById(containerId);
  if (!container) return;

  filenames.forEach((filename) => {
    const img = document.createElement("img");
    img.src = `assets/images/results/${folderPath}/${filename}`;
    img.alt = filename;

    // Mark it as lightboxable if you're using the lightbox
    img.classList.add("lightboxable");

    // Adjust styling to limit horizontal size
    img.style.display = "block";
    img.style.margin = "10px auto";
    img.style.maxWidth = "60%"; // up to 80% of parent container
    img.style.height = "auto"; // keep aspect ratio
    img.style.maxHeight = "800px"; // limit tall images from getting too big

    container.appendChild(img);
  });
}

// 6) On DOMContentLoaded, loop over each dataset and architecture
document.addEventListener("DOMContentLoaded", () => {
  datasets.forEach((dataset) => {
    // Construct the dataset folder name, e.g. "osu2008_final"
    const datasetFolder = `${dataset}_final`;

    // 6a) Load the comparative plots
    const compContainerId = `${dataset}-comparative`; // e.g. "osu2008-comparative"
    loadImages(compContainerId, datasetFolder, comparativePlots);

    // 6b) For each architecture, load individual plots
    architectures.forEach((arch) => {
      // e.g. folder "osu2008_final/MultiONet"
      const archFolder = `${datasetFolder}/${arch}`;
      // e.g. container "osu2008-MultiONet"
      const archContainerId = `${dataset}-${arch}`;
      loadImages(archContainerId, archFolder, individualPlots);
    });
  });
});
