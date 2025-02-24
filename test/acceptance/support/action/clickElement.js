import waitFor from '../action/waitFor'
import waitForDisplayed from '../action/waitForDisplayed'
import checkIfElementExists from '../lib/checkIfElementExists'

/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   selector Element selector
 */
export default async (action, type, selector) => {
   /**
    * Element to perform the action on
    * @type {String}
    */
   const selector2 = (type === 'link') ? `=${selector}` : selector

   /**
    * The method to call on the browser object
    * @type {String}
    */
   const method = (action === 'click') ? 'click' : 'doubleClick'

   // Wait for element to exist
   waitFor(selector2, 5000)

   // Wait for element to be displayed
   waitForDisplayed(selector2)

   // Check if element exists
   checkIfElementExists(selector2)

   // Perform the click action
   await $(selector2)[method]()
}