### Why are we making this change?

In Manifest V3, developers of content filtering extensions make heavy use of the Declarative Net Request API. These extensions rely on filter lists which can change often and need to be kept up to date for users. We already support dynamic rules and we are adding this option to make sure developers can continue to offer the same set of capabilities in MV3.

Before MV3, making a change like this would have been hard because we couldn't statically determine what an extension was capable of. Moving towards a more declarative API opened up this possibility to us.

![Sample Image](/notes/extensions-skip-review-eligible-changes/images/thumbnail.png)

### How can I qualify?

You will now be able to publish updates to safe static rules in your extensions without needing to go through review. Once submitted these changes will go live in a few minutes. Refer to the skip review for eligible changes documentation for more details on eligibility.

When submitting your change for review in the Developer Dashboard you will have an option to request to skip review before confirming.

Once you submit for review we will verify your item qualifies. If we detect ineligible changes we will let you know and confirm if you want to proceed with a standard review.

In addition to the Developer Dashboard, you will also be able to request skipping review when publishing with the API. Refer to Chrome Web Store API documentation for details on how.

This feature is live now, and the Chrome Web Store team is looking forward to continuing to improve the publishing experience for developers.
