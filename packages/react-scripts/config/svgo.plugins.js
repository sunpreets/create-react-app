module.exports = {
  plugins: [
    { cleanupAttrs: true },
    { removeDoctype: true },
    { removeXMLProcInst: true },
    { removeComments: true },
    { removeMetadata: true },
    { removeTitle: true }, // Changed from default of `false`
    { removeDesc: true },
    { removeUselessDefs: true },
    { removeXMLNS: false },
    { removeEditorsNSData: true },
    { removeEmptyAttrs: true },
    { removeHiddenElems: true },
    { removeEmptyText: true },
    { removeEmptyContainers: true },
    { removeViewBox: false },
    { cleanUpEnableBackground: true },
    { minifyStyles: true },
    { convertStyleToAttrs: true },
    { convertColors: true },
    { convertPathData: true },
    { convertTransform: true },
    { removeUnknownsAndDefaults: true },
    { removeNonInheritableGroupAttrs: true },
    { removeUselessStrokeAndFill: true },
    { removeUnusedNS: true },
    // Changed only prefix to '[name]-' (made possible because of InterpolateLoaderOptionsPlugin).
    { cleanupIDs: { minify: true, remove: true, prefix: '[name]-', preserve: [], force: false }},
    { cleanupNumericValues: true },
    { cleanupListOfValues: true },
    { moveElemsAttrsToGroup: true },
    { moveGroupAttrsToElems: true },
    { removeRasterImages: false },
    { mergePaths: true },
    { convertShapeToPath: true },
    { sortAttrs: false },
    { transformsWithOnePath: false },
    { removeDimensions: true }, // Changed from default of `false`
    { removeAttrs: false },
    { removeElementsByAttr: false },
    { addClassesToSVGElement: false },
    { addAttributesToSVGElement: false },
    { removeStyleElement: false },
    { collapseGroups: true }
  ]
};
