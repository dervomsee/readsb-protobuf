/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.Statistics');

goog.require('jspb.Message');
goog.require('proto.StatisticEntry');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Statistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Statistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Statistics.displayName = 'proto.Statistics';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Statistics.prototype.toObject = function(opt_includeInstance) {
  return proto.Statistics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Statistics} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Statistics.toObject = function(includeInstance, msg) {
  var f, obj = {
    latest: (f = msg.getLatest()) && proto.StatisticEntry.toObject(includeInstance, f),
    last1min: (f = msg.getLast1min()) && proto.StatisticEntry.toObject(includeInstance, f),
    last5min: (f = msg.getLast5min()) && proto.StatisticEntry.toObject(includeInstance, f),
    last15min: (f = msg.getLast15min()) && proto.StatisticEntry.toObject(includeInstance, f),
    total: (f = msg.getTotal()) && proto.StatisticEntry.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.Statistics} The clone.
 */
proto.Statistics.prototype.cloneMessage = function() {
  return /** @type {!proto.Statistics} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional StatisticEntry latest = 1;
 * @return {proto.StatisticEntry}
 */
proto.Statistics.prototype.getLatest = function() {
  return /** @type{proto.StatisticEntry} */ (
    jspb.Message.getWrapperField(this, proto.StatisticEntry, 1));
};


/** @param {proto.StatisticEntry|undefined} value  */
proto.Statistics.prototype.setLatest = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.Statistics.prototype.clearLatest = function() {
  this.setLatest(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.Statistics.prototype.hasLatest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional StatisticEntry last_1min = 2;
 * @return {proto.StatisticEntry}
 */
proto.Statistics.prototype.getLast1min = function() {
  return /** @type{proto.StatisticEntry} */ (
    jspb.Message.getWrapperField(this, proto.StatisticEntry, 2));
};


/** @param {proto.StatisticEntry|undefined} value  */
proto.Statistics.prototype.setLast1min = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.Statistics.prototype.clearLast1min = function() {
  this.setLast1min(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.Statistics.prototype.hasLast1min = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional StatisticEntry last_5min = 3;
 * @return {proto.StatisticEntry}
 */
proto.Statistics.prototype.getLast5min = function() {
  return /** @type{proto.StatisticEntry} */ (
    jspb.Message.getWrapperField(this, proto.StatisticEntry, 3));
};


/** @param {proto.StatisticEntry|undefined} value  */
proto.Statistics.prototype.setLast5min = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.Statistics.prototype.clearLast5min = function() {
  this.setLast5min(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.Statistics.prototype.hasLast5min = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional StatisticEntry last_15min = 4;
 * @return {proto.StatisticEntry}
 */
proto.Statistics.prototype.getLast15min = function() {
  return /** @type{proto.StatisticEntry} */ (
    jspb.Message.getWrapperField(this, proto.StatisticEntry, 4));
};


/** @param {proto.StatisticEntry|undefined} value  */
proto.Statistics.prototype.setLast15min = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.Statistics.prototype.clearLast15min = function() {
  this.setLast15min(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.Statistics.prototype.hasLast15min = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional StatisticEntry total = 5;
 * @return {proto.StatisticEntry}
 */
proto.Statistics.prototype.getTotal = function() {
  return /** @type{proto.StatisticEntry} */ (
    jspb.Message.getWrapperField(this, proto.StatisticEntry, 5));
};


/** @param {proto.StatisticEntry|undefined} value  */
proto.Statistics.prototype.setTotal = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.Statistics.prototype.clearTotal = function() {
  this.setTotal(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.Statistics.prototype.hasTotal = function() {
  return jspb.Message.getField(this, 5) != null;
};

