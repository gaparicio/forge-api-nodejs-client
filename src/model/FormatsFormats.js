/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. From visualizing data to 3D printing, take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = (function() {
  'use strict';

  var ApiClient = require('../ApiClient');



  /**
   * The FormatsFormats model module.
   * @module model/FormatsFormats
   * @version 0.1.5
   */

   /**
    * Constructs a <code>FormatsFormats</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/FormatsFormats} obj Optional instance to populate.
    * @return {module:model/FormatsFormats} The populated <code>FormatsFormats</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('svf')) {
        obj['svf'] = ApiClient.convertToType(data['svf'], ['String']);
      }
      if (data.hasOwnProperty('thumbnail')) {
        obj['thumbnail'] = ApiClient.convertToType(data['thumbnail'], ['String']);
      }
      if (data.hasOwnProperty('stl')) {
        obj['stl'] = ApiClient.convertToType(data['stl'], ['String']);
      }
      if (data.hasOwnProperty('step')) {
        obj['step'] = ApiClient.convertToType(data['step'], ['String']);
      }
      if (data.hasOwnProperty('iges')) {
        obj['iges'] = ApiClient.convertToType(data['iges'], ['String']);
      }
      if (data.hasOwnProperty('obj')) {
        obj['obj'] = ApiClient.convertToType(data['obj'], ['String']);
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>FormatsFormats</code>.
   * @alias module:model/FormatsFormats
   * @class
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/FormatsFormats} obj Optional instance to populate.
   */
  var exports = function(theData, obj) {
    var _this = this;








    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>FormatsFormats</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FormatsFormats} obj Optional instance to populate.
   * @return {module:model/FormatsFormats} The populated <code>FormatsFormats</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * @member {Array.<String>} svf
   */
  exports.prototype['svf'] = undefined;
  /**
   * @member {Array.<String>} thumbnail
   */
  exports.prototype['thumbnail'] = undefined;
  /**
   * @member {Array.<String>} stl
   */
  exports.prototype['stl'] = undefined;
  /**
   * @member {Array.<String>} step
   */
  exports.prototype['step'] = undefined;
  /**
   * @member {Array.<String>} iges
   */
  exports.prototype['iges'] = undefined;
  /**
   * @member {Array.<String>} obj
   */
  exports.prototype['obj'] = undefined;



  return exports;
}());


