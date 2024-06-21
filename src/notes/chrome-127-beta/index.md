Unless otherwise noted, the following changes apply to the newest Chrome beta channel release for Android, ChromeOS, Linux, macOS, and Windows. Learn more about the features listed here through the provided links or from the list on ChromeStatus.com. Chrome 127 is beta as of June 12, 2024. You can download the latest on Google.com for desktop or on Google Play Store on Android.

![Cover image](/notes/chrome-127-beta/images/thumbnail.png)

### CSS

This release adds three new CSS features.

### CSS font-size-adjust

The font-size-adjust CSS property provides a way to modify the size of lowercase letters relative to the size of uppercase letters, which defines the overall font-size. This property is useful for situations where font fallback can occur.

Chrome 127 includes the two value syntax to pass in a font metric and a value.

### Multi-argument alt text in CSS generated content

The CSS content property lets you specify alternative text for accessibility with the following syntax:

The syntax shown, where alt text is given by a single string, is already supported in Chrome. From Chrome 127 the alt text can be given by an arbitrary number of elements, which in addition to strings can be attr() functions or counters. For example:

Note that this feature entry doesn’t include the addition of counter support.

### Support for view transitions in iframes

From Chrome 127 concurrent same-document view transitions in a main frame and same-origin iframe will be available.

Previously, running a View Transition using the document.startViewTransition in a same-origin iframe wouldn't work if the main frame was running a transition at the same time. The iframe’s transition would be automatically skipped. Now, both transitions will execute.

View transitions on same-origin cross-document navigations in an iframe will also be supported.

## Web APIs

### Additions to Attribution Reporting

Chrome 127 includes two additional features for Attribution Reporting. Aggregate Debug reporting allows API callers to continue receiving debugging information even after 3rd party cookie deprecation. Attribution Scopes provide more control over attribution filtering.
